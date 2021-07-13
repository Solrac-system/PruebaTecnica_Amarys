using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end.entities
{
    public class Empleado
    {
        [Key]
        public int ID { get; set; }

        [Required(ErrorMessage = "{0} requeridos")]
        public string Nombres { get; set; }
        [Required(ErrorMessage =" numero de {0} requerido ")]
        public int Cedula { get; set; }
        public DateTime FechaNacimiento { get; set; }
    }
}
