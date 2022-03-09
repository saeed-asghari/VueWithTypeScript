import http from "@/http-common";

class ApiService {
  getAll(path:any): Promise<any> {
    return http.get(`${path}`);
  }

  get(path:any,id: any): Promise<any> {
    return http.get(`${path}/${id}`);
  }

  create(path:any,data: any): Promise<any> {
    return http.post(`${path}`, data);
  }

  update(path:any,id: any, data: any): Promise<any> {
    return http.put(`${path}/${id}`, data);
  }

  delete(path:any,id: any): Promise<any> {
    return http.delete(`${path}/${id}`);
  }

  deleteAll(path:any): Promise<any> {
    return http.delete(`${path}`);
  }


}

export default new ApiService();