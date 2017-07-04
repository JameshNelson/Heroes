update heroes
set name = $2, title = $3, class = $4, winpercent = $5
where name = $1
