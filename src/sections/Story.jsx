import Reveal from '../components/Reveal'
import { highlights } from '../data/content'
export default function Story() {
  return <section className="story-section section-pad" id="story">
    <div className="story-image"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1400&q=85" alt="Editorial streetwear fashion portrait" loading="lazy"/><span className="image-stamp">UT / EST. 2024</span></div>
    <div className="story-copy"><Reveal><p className="eyebrow">02 / THE POINT OF VIEW</p><h2>STYLE ISN'T<br/>A <span>UNIFORM.</span></h2><p className="story-lead">It's how you make the everyday your own.</p><p className="story-body">Urban Thread is an independent streetwear label for people who move to their own rhythm. We make versatile essentials with a little edge — no noise, no rules, just good clothes and better energy.</p></Reveal>
      <div className="highlight-list">{highlights.map((item,i)=><Reveal key={item.number} delay={i*.08}><div className="highlight"><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div><b>↗</b></div></Reveal>)}</div>
    </div>
  </section>
}
