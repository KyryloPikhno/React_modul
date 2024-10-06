import { urls } from '../configs';
import { axiosService } from './axios.service';

const userService = {
  createUser: (user) => axiosService.post(urls.users, user),
  getAll: () => axiosService.get(urls.users),
};

export { userService };
