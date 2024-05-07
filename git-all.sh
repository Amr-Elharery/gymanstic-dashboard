if [[ ! -v $1 ]]
then
	echo "Working now"
	git add *
	echo "Commit with message $1" 
	git commit -m $1
	git push origin master

else
	echo "Error, no commit message"
	exit

fi
