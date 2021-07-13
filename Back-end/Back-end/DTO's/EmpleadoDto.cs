using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end.DTO_s
{
    public class EmpleadoDto
    {
        public int ID { get; set; }
        public string Nombres { get; set; }
        public int Cedula { get; set; }
        public DateTime FechaNacimiento { get; set; }
    }
}
