

const Login =(placeholder)=>{

    return(
        <div className="login-page">
          <center>
            <h1>Login to Profile</h1>
          </center>
          <form onSubmit={()=>{}
            }>
          <center>
                <label>
                    {" "}
                    Username:{" "}
                    <input
                        className="login-field"
                        type="text"
                        id="username"
                        value={placeholder}
                        onChange={placeholder}
                    />
                </label>
            </center>
            <br />
            <center>
                <label>
                {" "}
                Password:{" "}
                <input
                    className="login-field"
                    type="password"
                    id="password"
                    value={placeholder}
                    onChange={placeholder}
                />
                </label>
            </center>
            <center>
                <br />
                <input className="login-field" type="submit" />
            </center>
          </form>
        </div>
    )
}

export default Login;