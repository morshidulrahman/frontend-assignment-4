import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { Calendar, Clock, MessageCircle } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "2025 Ruf Rodeo is ready to wrangle some rough roads",
    date: "18 Sep 2024",
    time: "6 mins",
    comments: 38,
    author: "David Jame",
    category: "Discovery",
    img: "https://carento-nextjs.vercel.app/assets/imgs/blog/blog-1/img-1.png",
  },
  {
    id: 2,
    title: "2025 Cadillac Escalade costs more money rough roads",
    date: "18 Sep 2024",
    time: "6 mins",
    comments: 38,
    author: "Jimmy Dave",
    category: "News",
    img: "https://carento-nextjs.vercel.app/assets/imgs/blog/blog-1/img-2.png",
  },
  {
    id: 3,
    title: "2025 BMW 5 Series Review: A balanced luxury sedan",
    date: "18 Sep 2024",
    time: "6 mins",
    comments: 38,
    author: "Steven Job",
    category: "Trend",
    img: "https://carento-nextjs.vercel.app/assets/imgs/blog/blog-1/img-3.png",
  },
  {
    id: 4,
    title: "Ford Mustang 2025: The muscle car returns stronger",
    date: "19 Sep 2024",
    time: "7 mins",
    comments: 42,
    author: "Alice Smith",
    category: "Muscle Cars",
    img: "https://carento-nextjs.vercel.app/assets/imgs/blog/blog-1/img-1.png",
  },
  {
    id: 5,
    title: "Tesla Model S Plaid: Next-level electric performance",
    date: "20 Sep 2024",
    time: "5 mins",
    comments: 25,
    author: "Robert Brown",
    category: "Electric",
    img: "https://carento-nextjs.vercel.app/assets/imgs/blog/blog-1/img-2.png",
  },

  {
    id: 3,
    title: "2025 BMW 5 Series Review: A balanced luxury sedan",
    date: "18 Sep 2024",
    time: "6 mins",
    comments: 38,
    author: "Steven Job",
    category: "Trend",
    img: "https://carento-nextjs.vercel.app/assets/imgs/blog/blog-1/img-3.png",
  },
  {
    id: 4,
    title: "Ford Mustang 2025: The muscle car returns stronger",
    date: "19 Sep 2024",
    time: "7 mins",
    comments: 42,
    author: "Alice Smith",
    category: "Muscle Cars",
    img: "https://carento-nextjs.vercel.app/assets/imgs/blog/blog-1/img-1.png",
  },
  {
    id: 5,
    title: "Tesla Model S Plaid: Next-level electric performance",
    date: "20 Sep 2024",
    time: "5 mins",
    comments: 25,
    author: "Robert Brown",
    category: "Electric",
    img: "https://carento-nextjs.vercel.app/assets/imgs/blog/blog-1/img-2.png",
  },
];

const BlogCarousel = () => {
  return (
    <div className="w-full py-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">Upcoming Cars & Events</h1>
        <p className="text-gray-400 mb-10">
          Stay ahead with the latest car releases and upcoming events
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="h-full flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-gray-500 flex items-center gap-2">
                  <Calendar className="text-gray-400 w-4 h-4" /> {post.date} •{" "}
                  <Clock className="text-gray-400 w-4 h-4" /> {post.time} •{" "}
                  <MessageCircle className="text-gray-400 w-4 h-4" />{" "}
                  {post.comments} comments
                </span>
                <h3 className="font-semibold text-lg mt-2 flex-grow">
                  {post.title}
                </h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-700">
                    👤 {post.author}
                  </span>
                  <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
                    Keep Reading
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCarousel;
