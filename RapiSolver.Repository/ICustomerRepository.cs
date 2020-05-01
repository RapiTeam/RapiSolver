using System.Collections.Generic;
using RapiSolver.Entity;
using RapiSolver.Repository.ViewModel;

namespace RapiSolver.Repository
{
    public interface ICustomerRepository: IRepository<Customer>
    {
          IEnumerable<CustomerViewModel> GetAllCustomers();

          IEnumerable<CustomerViewModel> GetCustomerByUserId(int id);

         
          bool ValidarSubscripcion(int id);
    }
}