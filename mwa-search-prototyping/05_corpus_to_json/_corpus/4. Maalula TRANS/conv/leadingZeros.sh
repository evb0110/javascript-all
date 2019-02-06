#!/bin/bash

IFS=$'\n'

for i in *.txt
do
  name=$(echo $i | sed 's/_//')
  echo $name
  perl6 -pe 's/ ^ \d+ /$/.fmt(Q[%03d])/' $i > "$name"
done
