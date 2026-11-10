export default function Marquee() {
  return <div className="marquee" aria-label="Find your own frequency"><div>{Array.from({length:4},(_,i)=><span key={i}>FIND YOUR OWN FREQUENCY <b>✳</b> MOVE DIFFERENT <b>✳</b>&nbsp;</span>)}</div></div>
}
