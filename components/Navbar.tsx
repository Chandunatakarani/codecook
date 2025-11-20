import { Code2, Trophy, BookOpen, User, Search, Bell } from 'lucide-react';
import Button from './UI/Button';

interface HeaderProps {
  currentPage: 'home' | 'problems' | 'blogs' | 'profile';
  onNavigate: (page: 'home' | 'problems' | 'blogs' | 'profile') => void;
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/55 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto ">
        <div className="flex  justify-between gap-4 h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0"></div>
              <Code2 className="relative w-8 h-8 text-black" />
            </div>
            <span className=" text-black">Codecook</span>
            <nav className="hidden md:flex items-center gap-1 text-black">
            <button
              
              className={`px-4 py-2 rounded-lg transition-all s `}
            >
              Home
            </button>
            <button
              
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all `}
            >
              <Trophy className="w-4 h-4" />
              Problems
            </button>
            <button
             
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all `}
            >
              <BookOpen className="w-4 h-4" />
              Blogs
            </button>
            <button
             
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all `}
            >
              <BookOpen className="w-4 h-4" />
              Courses
            </button>
          </nav>
          </div>

          {/* Navigation */}
          

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-black hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all">
              <Search className="w-5 h-5" />
            </button>
            {/* <button className="p-2 text-slate-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>
            <button
                className='text-slate-400 flex items-center gap-1'
            >
              <User className="w-5 h-5 " />
              
            </button> */}

            {/* not login  */}
            <div className='flex gap-3'>
                <Button intent='secondary' size='small' title='Login'/>
                <Button intent='primary' size='small' title='signup'/>
            </div>
           
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-blue-500/20 px-4 py-2 flex items-center justify-around">
        <button
         
        >
          Home
        </button>
        <button
          
        >
          <Trophy className="w-4 h-4" />
          Problems
        </button>
        <button
          
        >
          <BookOpen className="w-4 h-4" />
          Blogs
        </button>
      </div>
    </header>
  );
}

export default Header
