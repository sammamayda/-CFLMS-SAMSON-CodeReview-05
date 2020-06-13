var movies = JSON.parse(movies);
console.log(movies[3]);

$(document).ready(function() {



    for (var i = 0; i < movies.length; i++) {

        let discription = movies[i].discription;

        let movie = `<div class="movieBox"> 
						<img src="${movies[i].image}">
						<div class="moviesInfo"> 
								<div>
									<h4>  ${movies[i].title} </h4>
									<br>
									<p class="description"> ${movies[i].discription}</p>
								</div><br><br><br>
								<div class="movieLikeContainer">
									<div class="movieLikeCounter"> 
										<p1 class="movieLike">Like</p1>
										<div class="like grow">
                                          <i class="fa fa-thumbs-up fa-3x like" aria-hidden="true"></i>
                                        </div>
									</div>
									<div>
										<div class="counterBox"></div>
									</div> 
								</div> 
						</div>		
					</div>`

        $('#moviesInfo').append(movie);
    }
});