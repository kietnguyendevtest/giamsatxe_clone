import { useSetRole } from "~/hooks";
import NotRole from "~/components/not-role";
import { Account as AccountType } from "~/types/account-type";
// import GridData from "./grid-data";
import FormData from "./form-data";

type TFormData = AccountType;

function Accounts() {
    const roles = useSetRole();

    const handleSubmit = (values: TFormData) => {
        alert("Submit Form value: " + JSON.stringify(values));

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
        <>
            {roles && roles.IsXem ?
                <>
                    <FormData onSubmit={handleSubmit} roles={roles} />
                    {/* <GridData /> */}
                </>
                : <NotRole />
            }
        </>
    );
}

export default Accounts;
