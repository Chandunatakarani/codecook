// // // app/coursespage/page.tsx
// // type CoursesPageProps = {
// //   searchParams: Promise<{ type?: string }>;
// // };

// // async function GetCourses(type?: string) {
// //   const url = type
// //     ? `http://localhost:3000/api/courses?type=${type}`
// //     : `http://localhost:3000/api/courses`;

// //   const res = await fetch(url, {
// //     // so it always fetches fresh data on dev
// //     cache: "no-store",
// //   });

// //   const json = await res.json();
// //   return json.data; // array of courses
// // }

// // export default async function CoursesPage(props: CoursesPageProps) {
// //   const { type } = await props.searchParams;
// //   console.log("this is the type", type);

// //   const courses = await GetCourses(type);
// //   // console.log("these are the courses", courses);

// //   // handle no courses
// //   if (!courses || courses.length === 0) {
// //     return (
// //       <div className="min-h-screen bg-slate-50 px-4 py-8">
// //         <div className="max-w-5xl mx-auto">
// //           <h1 className="text-2xl font-bold mb-2">
// //             {type ? `No courses found for "${type}"` : "No courses found"}
// //           </h1>
// //           <p className="text-gray-600">
// //             Try adding courses in the database or change the filter.
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-white-50 px-4 py-8">
// //       <div className="max-w-5xl mx-auto">
// //         {/* Page header */}
// //         <div className="mb-6">
// //           <h1 className="text-3xl font-bold text-slate-900 mb-1">
// //             {type ? `${type} Courses` : "All Courses"}
// //           </h1>
// //           <p className="text-sm text-slate-600">
// //             Showing {courses.length} course{courses.length > 1 ? "s" : ""}{" "}
// //             {type ? `in the "${type}" category.` : "from all categories."}
// //           </p>
// //         </div>

// //         {/* Courses grid */}
// //         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
// //           {courses.map((course: any) => (
// //             <div
// //               key={course.slug}
// //               className="bg-orange-400 rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col justify-between hover:shadow-md transition"
// //             >
// //               <div>
// //                 <div className="flex items-center justify-between mb-2">
// //                   <h2 className="font-semibold text-lg text-white ">
// //                     {course.title}
// //                   </h2>
// //                   {course.level && (
// //                     <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-900 text-white">
// //                       {course.level}
// //                     </span>
// //                   )}
// //                 </div>

// //                 {course.category && (
// //                   <p className="text-xs text-slate-500 mb-1">
// //                     Category: {course.category}
// //                   </p>
// //                 )}

// //                 {course.shortDescription && (
// //                   <p className="text-sm text-slate-700 mt-2 line-clamp-3">
// //                     {course.shortDescription}
// //                   </p>
// //                 )}

// //                 {course.durationHours && (
// //                   <p className="text-xs text-slate-500 mt-2">
// //                     Duration: {course.durationHours} hours
// //                   </p>
// //                 )}

// //                 {(course.numLessons || course.numProjects) && (
// //                   <p className="text-xs text-slate-500 mt-1">
// //                     {course.numLessons && `${course.numLessons} lessons`}
// //                     {course.numLessons && course.numProjects && " • "}
// //                     {course.numProjects && `${course.numProjects} projects`}
// //                   </p>
// //                 )}
// //               </div>

// //               <div className="mt-4 flex items-center justify-between">
// //                 {course.isFree ? (
// //                   <span className="text-sm font-semibold text-emerald-600">
// //                     Free
// //                   </span>
// //                 ) : (
// //                   <span className="text-sm font-semibold text-slate-900">
// //                     ₹{course.price}
// //                   </span>
// //                 )}

// //                 <button className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition">
// //                   View Details
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



















// // app/coursespage/page.tsx
// import { Clock, BookOpen, FolderOpen, TrendingUp, Sparkles } from "lucide-react";

// type CoursesPageProps = {
//   searchParams: Promise<{ type?: string }>;
// };

// async function GetCourses(type?: string) {
//   const url = type
//     ? `http://localhost:3000/api/courses?type=${type}`
//     : `http://localhost:3000/api/courses`;

//   const res = await fetch(url, {
//     cache: "no-store",
//   });

//   const json = await res.json();
//   return json.data;
// }

// export default async function CoursesPage(props: CoursesPageProps) {
//   const { type } = await props.searchParams;
//   const courses = await GetCourses(type);

//   if (!courses || courses.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-16">
//         <div className="max-w-5xl mx-auto text-center">
//           <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 mb-6 shadow-lg">
//             <BookOpen className="w-10 h-10 text-white" />
//           </div>
//           <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//             {type ? `No courses found for "${type}"` : "No courses available"}
//           </h1>
//           <p className="text-slate-600 text-lg">
//             Try adding courses in the database or change the filter.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Hero Header */}
//         <div className="mb-12 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-semibold mb-4 shadow-lg">
//             <Sparkles className="w-4 h-4" />
//             <span>Premium Learning Experience</span>
//           </div>
          
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
//             {type ? `${type} Courses` : "Explore Our Courses"}
//           </h1>
          
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             {type 
//               ? `Discover ${courses.length} expertly crafted ${type.toLowerCase()} course${courses.length > 1 ? "s" : ""}`
//               : `Choose from ${courses.length} world-class course${courses.length > 1 ? "s" : ""} designed to accelerate your career`
//             }
//           </p>
//         </div>

//         {/* Stats Bar */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//           <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
//                 <BookOpen className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-slate-900">{courses.length}</p>
//                 <p className="text-sm text-slate-600">Total Courses</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
//                 <TrendingUp className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-slate-900">{courses.filter((c: any) => c.isFree).length}</p>
//                 <p className="text-sm text-slate-600">Free Courses</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
//                 <Clock className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-slate-900">
//                   {courses.reduce((acc: number, c: any) => acc + (c.durationHours || 0), 0)}h
//                 </p>
//                 <p className="text-sm text-slate-600">Total Hours</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
//                 <FolderOpen className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-slate-900">
//                   {[...new Set(courses.map((c: any) => c.category))].length}
//                 </p>
//                 <p className="text-sm text-slate-600">Categories</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course: any) => (
//             <div
//               key={course.slug}
//               className="group bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
//             >
//               {/* Card Header with Gradient */}
//               <div className="h-36 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
//                 <div className="absolute top-4 right-4">
//                   {course.isFree ? (
//                     <span className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-lg">
//                       FREE
//                     </span>
//                   ) : (
//                     <span className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-lg">
//                       ₹{course.price}
//                     </span>
//                   )}
//                 </div>
//                 <div className="absolute bottom-4 left-4">
//                   {course.level && (
//                     <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/30">
//                       {course.level}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Card Body */}
//               <div className="p-6">
//                 {course.category && (
//                   <p className="text-xs font-semibold text-orange-600 mb-2 uppercase tracking-wide">
//                     {course.category}
//                   </p>
//                 )}

//                 <h2 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
//                   {course.title}
//                 </h2>

//                 {course.shortDescription && (
//                   <p className="text-sm text-slate-600 mb-4 line-clamp-3">
//                     {course.shortDescription}
//                   </p>
//                 )}

//                 {/* Course Meta */}
//                 <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-600">
//                   {course.durationHours && (
//                     <div className="flex items-center gap-1.5">
//                       <Clock className="w-4 h-4 text-orange-500" />
//                       <span>{course.durationHours}h</span>
//                     </div>
//                   )}
//                   {course.numLessons && (
//                     <div className="flex items-center gap-1.5">
//                       <BookOpen className="w-4 h-4 text-blue-500" />
//                       <span>{course.numLessons} lessons</span>
//                     </div>
//                   )}
//                   {course.numProjects && (
//                     <div className="flex items-center gap-1.5">
//                       <FolderOpen className="w-4 h-4 text-purple-500" />
//                       <span>{course.numProjects} projects</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* CTA Button */}
//                 <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold hover:from-orange-500 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-xl">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



















// app/coursespage/page.tsx
import { Clock, BookOpen, FolderOpen, TrendingUp, Sparkles, Star, Users, Award } from "lucide-react";

type CoursesPageProps = {
  searchParams: Promise<{ type?: string }>;
};

async function GetCourses(type?: string) {
  const url = type
    ? `http://localhost:3000/api/courses?type=${type}`
    : `http://localhost:3000/api/courses`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const json = await res.json();
  return json.data;
}

export default async function CoursesPage(props: CoursesPageProps) {
  const { type } = await props.searchParams;
  const courses = await GetCourses(type);

  if (!courses || courses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 shadow-2xl">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-slate-800">
            {type ? `No courses found for "${type}"` : "No courses available"}
          </h1>
          <p className="text-slate-600 text-lg">
            Try adding courses in the database or change the filter.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold mb-6 shadow-lg animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Premium Learning Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-5 text-slate-900">
            {type ? `${type} Courses` : "Explore Our Courses"}
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {type 
              ? `Discover ${courses.length} expertly crafted ${type.toLowerCase()} course${courses.length > 1 ? "s" : ""}`
              : `Choose from ${courses.length} world-class course${courses.length > 1 ? "s" : ""} designed to accelerate your career`
            }
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">{courses.length}</p>
              <p className="text-sm font-semibold text-slate-600">Total Courses</p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">{courses.filter((c: any) => c.isFree).length}</p>
              <p className="text-sm font-semibold text-slate-600">Free Courses</p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                {courses.reduce((acc: number, c: any) => acc + (c.durationHours || 0), 0)}h
              </p>
              <p className="text-sm font-semibold text-slate-600">Total Hours</p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4 shadow-lg">
                <FolderOpen className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">
                {[...new Set(courses.map((c: any) => c.category))].length}
              </p>
              <p className="text-sm font-semibold text-slate-600">Categories</p>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course: any, index: number) => {
            // Dynamic gradient colors for variety
            const gradients = [
              "from-blue-500 via-blue-600 to-indigo-700",
              "from-purple-500 via-purple-600 to-pink-600",
              "from-emerald-500 via-teal-600 to-cyan-700",
              "from-orange-500 via-red-500 to-pink-600",
              "from-indigo-500 via-purple-600 to-pink-600",
              "from-teal-500 via-emerald-600 to-green-700"
            ];
            const gradient = gradients[index % gradients.length];
            
            return (
              <div
                key={course.slug}
                className="group bg-white rounded-3xl shadow-xl border-2 border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-3 hover:border-blue-200 transition-all duration-500"
              >
                {/* Card Header with Dynamic Gradient */}
                <div className={`h-44 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
                  </div>
                  
                  <div className="absolute top-5 right-5">
                    {course.isFree ? (
                      <span className="px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-bold shadow-xl flex items-center gap-1.5">
                        <Star className="w-4 h-4 fill-white" />
                        FREE
                      </span>
                    ) : (
                      <span className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-bold shadow-xl">
                        ₹{course.price}
                      </span>
                    )}
                  </div>
                  
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    {course.level && (
                      <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-lg">
                        {course.level}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md">
                      <Award className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold text-slate-900">Certified</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  {course.category && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                    </div>
                  )}

                  <h2 className="font-black text-2xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {course.title}
                  </h2>

                  {course.shortDescription && (
                    <p className="text-sm text-slate-600 mb-5 line-clamp-3 leading-relaxed">
                      {course.shortDescription}
                    </p>
                  )}

                  {/* Course Meta with Icons */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {course.durationHours && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                          <Clock className="w-4 h-4 text-orange-600" />
                        </div>
                        <span>{course.durationHours}h</span>
                      </div>
                    )}
                    {course.numLessons && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                        </div>
                        <span>{course.numLessons} lessons</span>
                      </div>
                    )}
                    {course.numProjects && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                          <FolderOpen className="w-4 h-4 text-purple-600" />
                        </div>
                        <span>{course.numProjects} projects</span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
                    View Course Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}