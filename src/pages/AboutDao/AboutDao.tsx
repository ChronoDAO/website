import './AboutDao.scss';
// import Roadmap from '../../components/roadmap/Roadmap';
import DAOTimeline from '../../components/DaoTimeline/DaoTimeline';

export default function AboutDao() {
  return (
    <main className='main' id="mainDAO">
      <h1>A propos de ChronoDAO</h1>
      <br/>
      <section id="containerDAO">
        <div className="content">
          <h2>L'histoire de notre DAO</h2>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil eaque porro quas exercitationem, tempore distinctio ipsam vero aperiam, enim quos inventore nulla odio repudiandae cum molestias fugiat laborum eveniet.
            Vel ipsa vero velit molestiae est quisquam! Perspiciatis ullam perferendis aperiam inventore nam in provident cum magnam maiores, tenetur odio. Quia, enim quidem corrupti magnam delectus soluta maiores error accusamus?
            Consequuntur id nisi possimus similique quas impedit sapiente illum ducimus, inventore incidunt enim, obcaecati itaque repellat natus nam quidem ad vel nihil, eaque iusto dolorem dicta. Odit officia ab deleniti!
            Ullam ex, ab a illo eligendi iure pariatur sint quisquam, saepe dolorem consequuntur aliquid voluptatem, quam aperiam. Qui a nulla repudiandae ipsum iure harum, vero, odit in minus odio unde?
            Libero unde nihil incidunt aut beatae odio facilis molestiae mollitia cumque officiis, delectus cum quia modi obcaecati, provident, nam cupiditate at laudantium commodi facere repudiandae blanditiis quos? Quo, delectus quae?</p>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil eaque porro quas exercitationem, tempore distinctio ipsam vero aperiam, enim quos inventore nulla odio repudiandae cum molestias fugiat laborum eveniet.
            Vel ipsa vero velit molestiae est quisquam! Perspiciatis ullam perferendis aperiam inventore nam in provident cum magnam maiores, tenetur odio. Quia, enim quidem corrupti magnam delectus soluta maiores error accusamus?
            Consequuntur id nisi possimus similique quas impedit sapiente illum ducimus, inventore incidunt enim, obcaecati itaque repellat natus nam quidem ad vel nihil, eaque iusto dolorem dicta. Odit officia ab deleniti!
            Ullam ex, ab a illo eligendi iure pariatur sint quisquam, saepe dolorem consequuntur aliquid voluptatem, quam aperiam. Qui a nulla repudiandae ipsum iure harum, vero, odit in minus odio unde?
            Libero unde nihil incidunt aut beatae odio facilis molestiae mollitia cumque officiis, delectus cum quia modi obcaecati, provident, nam cupiditate at laudantium commodi facere repudiandae blanditiis quos? Quo, delectus quae?</p>
        </div>

        <section id="sidebar">
          <h2>Trésorerie</h2>
          <img src='https://placehold.co/600x400' id="img_sidebar" alt='Trésorerie'></img>
        </section>
      </section>
      
      <section id='containerMap'>
        <div className="content2">
          
         {/* <Roadmap/> */}
         <DAOTimeline/>
        </div>
      </section>
    </main>
  );
}
