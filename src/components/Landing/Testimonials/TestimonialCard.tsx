type Testimonial = {
  name: string;
  role: string;
  initials: string;
  feedback: string;
  rating: number;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const StarIcon: React.FC<{ color?: string }> = ({ color = "#51BAFF" }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
  >
    <g clipPath="url(#clip0_5303_15632)">
      <path
        d="M8.00072 0.489502L10.5741 5.20807L15.8569 6.19736L12.1645 10.1029L12.8561 15.4329L8.00072 13.1281L3.14533 15.4329L3.83694 10.1029L0.144531 6.19736L5.42736 5.20807L8.00072 0.489502Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_5303_15632">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const bgColors = [
    "bg-orange-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-teal-500",
  ];
  const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];
  return (
    <div className="bg-[#171a34] rounded-lg p-4 space-y-4">
      {/* Profile */}
      <div className="flex items-center gap-4">
        <p
          className={`${randomBg} h-[40px] w-[40px] flex items-center justify-center rounded-full text-white text-[20px]`}
        >
          {testimonial.name.charAt(0)}
        </p>
        <div>
          <h1 className="text-white text-[18px] font-semibold">
            {testimonial.name}
          </h1>
          <h3 className="text-[#c2cde7]">{testimonial.role}</h3>
        </div>
      </div>

      {/* Testimonial */}
      <p className="text-white text-[16px]">{testimonial.feedback}</p>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
