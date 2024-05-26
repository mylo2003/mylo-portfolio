export default function LinkedInSVG(props) {
  return (
    <svg
      className="w-9 h-9 transition-all hover:fill-purple-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ffffff"
      {...props}
    >
      <circle cx={4.983} cy={5.009} r={2.188} />
      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
    </svg>
  );
}

