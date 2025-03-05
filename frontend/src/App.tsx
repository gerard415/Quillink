import {Route, Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import StudentDashboardLayout from "./Layouts/StudentDashboardLayout";
import DiscoverPage from "./Pages/DiscoverPage";
import MyCoursesPage from "./Pages/MyCoursesPage";
import BillingPage from "./Pages/BillingPage";
import StudentProfilePage from "./Pages/StudentProfilePage";
import SingleCoursePage from "./Pages/SingleCoursePage";
import TeacherDashboardLayout from "./Layouts/TeacherDashboardLayout";
import TeacherCoursesPage from "./Pages/TeacherCoursesPage";
import TeacherAnalyticsPage from "./Pages/TeacherAnalyticsPage";
import TeacherProfilePage from "./Pages/TeacherProfilePage";
import SuccessPage from './Pages/SuccessPage';
import NotFoundPage from './Pages/NotFoundPage';
import UnsuccessfulPage from './Pages/UnsuccessfulPage';
import AddNewCoursePage from "./Pages/AddNewCoursePage";
import EditCoursePage from "./Pages/EditCoursePage";
import EditChapterPage from "./Pages/EditChapterPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<LoginPage/>}  />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path="/dashboard/courses" element={<StudentDashboardLayout/>}>
          <Route index element={<DiscoverPage/>} />
          <Route path="dashboard/courses/:id" element={<SingleCoursePage/>} />
          <Route path="dashboard/my-courses" element={<MyCoursesPage/>} />
          <Route path="dashboard/my-courses/:id" element={<SingleCoursePage/>} />
          <Route path="dashboard/billing" element={<BillingPage/>} />
          <Route path="dashboard/student-profile" element={<StudentProfilePage/>} />
        </Route>
        <Route path="/teacher-dashboard" element={<TeacherDashboardLayout/>} >
          <Route index element={<TeacherCoursesPage/>} />
          <Route path="teacher-dashboard/courses/add" element={<AddNewCoursePage/>} />
          <Route path="teacher-dashboard/courses/:id" element={<EditCoursePage/>} />
          <Route path="teacher-dashboard/courses/:id/chapters/:id" element={<EditChapterPage/>} />
          <Route path="/teacher-dashboard/analytics" element={<TeacherAnalyticsPage/>} />
          <Route path="/teacher-dashboard/profile" element={<TeacherProfilePage/>}/>
        </Route>
        <Route path='/success-page' element={<SuccessPage/>} />
        <Route path='/unsuccessful-page' element={<UnsuccessfulPage/>} />
        <Route path='/notfound-page' element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}

export default App