const Spinner = () => {
  return (
    <div role="loading" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 animate-spin">
      <div className="absolute top-0 left-0  bg-blue-400 w-5 h-5 rounded-full"></div>
      <div className="absolute top-0 right-0 bg-white w-5 h-5 rounded-full dark:bg-slate-50"></div>
      <span className="sr-only">Loading…</span>
    </div>
  )
}

export default Spinner
