import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }
    getEmployeeById(employeeID){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeID)
    }
    updateEmployee(employee,employeeID){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeID, employee)
    }
    deleteEmployee(employeeID){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+employeeID)
    }
}

export default new EmployeeService()