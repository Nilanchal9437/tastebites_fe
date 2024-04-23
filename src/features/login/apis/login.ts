import axios from "axios";
import { AppDispatch } from "@/types";
import { setLoading, setMessage } from "@/toolkits/universal";
import { severityType } from "@/toolkits/types/universal";
import { setCookie } from "nookies";

const login =
  (payload: { email: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios
        .post("/api/login", payload, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => res.data);

      if (response.status === 200) {
        setCookie(null, "tastebites", `${response.token}`, {
          maxAge: 24 * 60 * 60,
          path: "/"
        });
        setCookie(null, "user", `${JSON.stringify(response.data)}`, {
          maxAge: 24 * 60 * 60,
          path: "/"
        });
        dispatch(
          setMessage({
            open: true,
            message: "login successfully!",
            severity: severityType.success
          })
        );
        window.location.href = "/";
      } else if (response.status === 404) {
        dispatch(
          setMessage({
            open: true,
            message: response.message,
            severity: severityType.warning
          })
        );
        setTimeout(() => {
          window.location.href = "/register";
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
      console.error("error in login API ", err?.message);
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

export default login;
