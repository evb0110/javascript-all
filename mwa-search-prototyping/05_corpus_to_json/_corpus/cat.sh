#!/bin/bash
IFS=$'\n' 
  for i in $(ls | egrep -v "sh|txt" ) 
  do
    cd $i
    for j in *
    do
      echo '++++++++++++++++++++++++++++++++++++++++++++++++++'
      echo $i
      echo $j
      echo '=================================================='
      cat $j
      echo '--------------------------------------------------'
      echo ''
    done
    cd ..
done
