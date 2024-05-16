import axios from "axios";

const API = "http://localhost:3500";

interface CredentialsParams {
  email: string;
  password: string;
}

export const signUp = async (credentials: CredentialsParams) => {
  try {
    const response = await axios.post(`${API}/auth/signup`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const login = async (credentials: CredentialsParams) => {
  try {
    const response = await axios.post(`${API}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
