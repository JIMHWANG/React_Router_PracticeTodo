import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  Outlet,
  Link,
  useParams
} from 'react-router-dom';

const Todo = () => {
  let TodoNavigate = useNavigate();
  return (
    <>
      <p>這是 Todo 頁面</p>
      <button onClick={() => {
        TodoNavigate("/login");
      }}>LogOut</button>
      <button onClick={() => {
        TodoNavigate(-1);
      }}>回上一頁</button>
    </>
  )
};
const Login = () => {
  return (
    <>
      <p>這是登入頁面</p>
    </>
  );
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Home = () => {
  return <p>這是首頁</p>;
};
const NotFound = () => {
  return <p>無此頁</p>;
};
const Post = () => {
  return (
    <>
      <p>User詳細資料</p>
      <Link to="PostTest">PostTest</Link>
      <Outlet />
      <p>User詳細資料</p>
    </>
  )
};
const PostDefault = () => {
  return (
    <>
      <p>Post default</p>
    </>
  )
}
const PostTest = () => {
  return (
    <>
      <p>PostTest</p>
    </>
  )
};
const ProfilePage = () => {
  let params = useParams();
  return <p>UserID: {params.userId}</p>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/test">
            <p>TEST</p>
          </NavLink>
          <NavLink to="/Post">
            <p>Post詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="REGISTER" element={<Register />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="ToDo" element={<Todo />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="post" element={<Post />}>
            <Route index element={<PostDefault />}></Route>
            <Route path="PostTest" element={<PostTest />}></Route>
            <Route path=":userId" element={<ProfilePage />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
