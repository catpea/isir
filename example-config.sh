#!/usr/bin/env bash

echo "This is an example.";
exit;

isir conf system options commands /home/peapod/peapod/commands

# Connect Beauty-R1 patterns to macros:
isir conf pattern 525094d7-88aa-59ae-8e09-b2b3365f989d macro play
isir conf pattern a89c2671-be39-5096-a1a7-80d17125042c macro stop
isir conf pattern d772ad3d-830d-4bf9-8dde-df0d4836fea8 macro next
isir conf pattern b3a8f352-8686-4d43-beb9-df1c1f171ea9 macro prev
isir conf complex 322a9c06-e24b-4da2-8749-01f31fb2e494 macro loud
isir conf complex 354cd6ed-c4f6-4744-9b17-a1bffb72e325 macro soft

# Register custom iSir macros
isir conf macro play command play.sh
isir conf macro stop command stop.sh
isir conf macro next command list.sh next
isir conf macro prev command list.sh prev
isir conf macro loud command cans.sh loud hard bork
isir conf macro soft command cans.sh soft
