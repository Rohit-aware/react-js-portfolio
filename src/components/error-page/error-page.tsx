import { useRouteError } from "react-router-dom";

interface RouteError {
    status?: number;
    statusText?: string;
    message?: string;
}

const ErrorPage = () => {
    const error = useRouteError() as RouteError;
    const { message, status, statusText } = error
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{statusText || message}</i>
            </p>
        </div>
    );
}
export default ErrorPage;