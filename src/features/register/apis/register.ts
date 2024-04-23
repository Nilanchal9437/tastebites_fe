import axios from "axios";
import { AppDispatch } from "@/types";
import { setLoading, setMessage } from "@/toolkits/universal";
import { severityType } from "@/toolkits/types/universal";

const register =
  (payload: { email: string; password: string; phone: string }) =>
  async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios
        .post("/api/register", payload, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => res.data);

      if (response.status === 200) {
        dispatch(
          setMessage({
            open: true,
            message: response.message,
            severity: severityType.success
          })
        );
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      } else {
        dispatch(
          setMessage({
            open: true,
            message: response.message,
            severity: severityType.warning
          })
        );
      }
    } catch (err: any) {
      console.error("error in register API ", err?.message);
      dispatch(
        setMessage({
          open: true,
          message: err?.message,
          severity: severityType.error
        })
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

export default register;
