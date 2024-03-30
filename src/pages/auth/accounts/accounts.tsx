import GridData from "./grid-data";
import FormData from "./form-data";
import { Account as AccountType } from "~/types/account-type";

type TFormData = AccountType;

function Accounts() {

    const handleSubmit = (values: TFormData) => {
        console.log("handleSubmit", values);

        // loginMutation.mutate(data, {
        //    onSuccess: (data) => {
        //       setIsAuthenticated(true)
        //       setProfile(data.data.data.user)
        //       navigate('/')
        //    },
        //    onError: (error) => {
        //       if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
        //          const formError = error.response?.data.data
        //          if (formError) {
        //             Object.keys(formError).forEach((key) => {
        //                setError(key as keyof FormData, {
        //                   message: formError[key as keyof FormData],
        //                   type: 'Server'
        //                })
        //             })
        //          }
        //       }
        //    }
        // })
    }

    return (
        <div>
            <FormData onSubmit={handleSubmit} />
            <GridData />
        </div>
    );
}

export default Accounts;
