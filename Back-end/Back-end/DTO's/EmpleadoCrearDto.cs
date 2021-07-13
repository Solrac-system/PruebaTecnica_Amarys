using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end.DTO_s
{
    public class EmpleadoCrearDto
    {
        [Required(ErrorMessage = "{0} requeridos")]
        public string Nombres { get; set; }

        [Required(ErrorMessage = "numero {0} requerido ")]
        public int Cedula { get; set; }
        public DateTime FechaNacimiento { get; set; }
    }
}
