using AutoMapper;
using Back_end.DTO_s;
using Back_end.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end.Utilities
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Empleado, EmpleadoDto>().ReverseMap();
            CreateMap<EmpleadoCrearDto, Empleado>();
        }
    }
}
