function Card(props){
    return(
        <div className="card bg-dark border border-dark-subtle text-center col-sm-auto m-3">
            <div className="card-body">
              <h5 className="card-title text-light">{props.content}</h5>
            </div>
          </div>
    )
}

export default Card;
