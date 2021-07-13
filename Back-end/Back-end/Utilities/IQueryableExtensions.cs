using Back_end.DTO_s;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end.Utilities
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Paginar<T>(this IQueryable<T> queryable, PaginacionDto paginacionDto)
        {
            return queryable
                .Skip((paginacionDto.Pagina - 1) * paginacionDto.RecordPorPagina)
                .Take(paginacionDto.RecordPorPagina);
        }
    }
}
