import React from 'react'

function Login() {
  return (
    <section class="login">
    <form action="">
    <h3>login now</h3>
    <input type="email" name="" placeholder="enter your email" id="" class="box"></input>
    <input type="password" name="" placeholder="enter your password" id="" class="box"></input>
    <div class="remember">
    <input type="checkbox" name="" id="remember-me"></input>
    <label for="remember-me"> remember me </label>
    </div>
    <input type="submit" value="login now" class="btn"></input>
        <p>don't have an account?</p>
        <a href="register.html" class="btn link">register now</a>
    </form>
</section>
  )
}

export default Login;