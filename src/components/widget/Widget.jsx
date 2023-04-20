import "./widget.scss"

const Widget = ({type}) => {
  let data;
  switch(type){
    case'yesterday':
    data = {
      title1:"KNICKS",
      schet1:"76",
      img1:"https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png",
      title2:"SPURS",
      schet2:'84',
      img2:"https://logos-marcas.com/wp-content/uploads/2020/06/San-Antonio-Spurs-Emblema.png",
      day:'YESTERDAY'
    };
    break;
    case'tomorrow':
    data = {
      title1:"HAWKS",
      schet1:"",
      img1:"https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png",
      title2:"MAVERICKS",
      schet2:"",
      img2:"https://upload.wikimedia.org/wikipedia/ru/9/97/Dallas_Mavericks_logo.svg",
      day:"TOMORROW"
    };
    break;
    default:
    break;
  }
  return (
    <div className="widget">
      <div className="min">
        <div className="left">
            
            <img className="image" src={data.img1}></img>
            <span className="schet1">{data.schet1}</span>
        </div>
        <div className="bottom">
          {data.day}
          <div>-</div>
          </div>
        <div className="right">
        <span className="schet2">{data.schet2}</span>
        
        <img className="image" src={data.img2}></img>
        </div>
        
        </div>
    </div>
  )
}

export default Widget