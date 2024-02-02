count=0

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
fi

for a in "$@";
do
    if [ -n "$a" ]; then
        echo "$a"
		((count++))
    fi
	if [ "$count" -eq 3 ]; then
        break
    fi
done
