import Cookies from "js-cookie"

export function logout() {
    // Remove all cookies
    Cookies.remove("access")
    Cookies.remove("refresh")
    Cookies.remove("role")
    Cookies.remove("loggedIn")

    // Redirect to login page
    window.location.href = "/"
}