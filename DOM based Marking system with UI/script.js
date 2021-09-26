document.getElementById("form").addEventListener("click",
	function(event){
		event.preventDefault();
	}
)

function myfunc2(){
	location.reload();
}

function myfunc(){
	const x = document.getElementById("itmarks").value;
	const y = document.getElementById("mathsmarks").value;
	const z = document.getElementById("sciencemarks").value;
	const xx = parseInt(x);
	const yy = parseInt(y);
	const zz = parseInt(z);

	if (xx>100 || xx<0){
		alert("IT Marks are Invalid!");
		return false;
	}

	else if(yy>100 || yy<0){
		alert("Maths Marks are Invalid!");
		return false;
	}

	else if(zz>100 || zz<0){
		alert("Science Marks are Invalid!");
		return false;
	}

	else{
		const sum = xx+yy+zz;
		const avg = sum/3;
		const details_sum = document.querySelector(".details-sum");
		const details_avg = document.querySelector(".details-avg");
		const details_rank = document.querySelector(".details-rank");
		details_sum.innerHTML = "Total : "+sum;
		details_avg.innerHTML = "Average : "+avg;

		if(sum>=250){
			details_rank.innerHTML = "Rank : A";
		}

		else if(sum>=200 && sum<250){
			details_rank.innerHTML = "Rank : B";
		}

		else if(sum>=150 && sum<200){
			details_rank.innerHTML = "Rank : C";
		}

		else{
			details_rank.innerHTML = "Rank : S";
		}

	}

}

