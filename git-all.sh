echo "Enter commit message:"
read msg
if [[ -n $msg ]]
then
	echo "Working now"
	echo "Commit with message $msg"
	git add * && git commit -m $msg && git push origin master

else
	echo "Error, no commit message"
	exit

fi
