using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end.DTO_s
{
    public class PaginacionDto
    {
        public int Pagina { get; set; } = 1;
        private int recordPorPagina = 10;
        private readonly int recordPorPaginaMax = 50;
        public int RecordPorPagina
        {
            get { return recordPorPagina; }
            set { recordPorPagina = (value > recordPorPaginaMax) ? recordPorPaginaMax : value; }
        }
    }
}
