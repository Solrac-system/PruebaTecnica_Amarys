using AutoMapper;
using Back_end.Data;
using Back_end.DTO_s;
using Back_end.entities;
using Back_end.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end.Controllers
{
    [Route("api/empleados")]
    [ApiController]
    public class EmpleadosController : ControllerBase
    {
        private readonly ApiDbContext dbContext;
        private readonly IMapper mapper;

        public EmpleadosController(ApiDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<EmpleadoDto>>> GetAll([FromQuery] PaginacionDto paginacionDto)
        {
            var queryable = dbContext.Empleado.AsQueryable();
            await HttpContext.InsertarPaginacionEnCabecera(queryable);
            var empleados = await queryable.OrderBy(x => x.Nombres).Paginar(paginacionDto).ToListAsync();
            return mapper.Map<List<EmpleadoDto>>(empleados);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<EmpleadoDto>> Get(int id)
        {
            var empleado = await dbContext.Empleado.FirstOrDefaultAsync(x => x.ID.Equals(id));
            if (empleado.Equals(null))
            {
                return NotFound();
            }
            return mapper.Map<EmpleadoDto>(empleado);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] EmpleadoCrearDto empleadoCrearDto)
        {
            var empleado = mapper.Map<Empleado>(empleadoCrearDto);
            dbContext.Add(empleado);
            await dbContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Edit(int id, [FromBody] EmpleadoCrearDto empleadoCrearDto)
        {
            var empleado = await dbContext.Empleado.FirstOrDefaultAsync(x => x.ID.Equals(id));
            if (empleado.Equals(null))
            {
                return NotFound();
            }
            empleado = mapper.Map(empleadoCrearDto, empleado);
            await dbContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await dbContext.Empleado.AnyAsync(x => x.ID.Equals(id));
            if (!existe)
            {
                return NotFound();
            }
            dbContext.Remove(new Empleado() { ID = id });
            await dbContext.SaveChangesAsync();
            return NoContent();
        }

    }
}
