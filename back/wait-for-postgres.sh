#!/bin/sh
# wait-for-postgres.sh

set -e

host="$1"
shift
cmd="$@"

until PGPASSWORD=$pg_password psql -h "$host" -p "$pg_port" --username "$pg_user" --password "$pg_password" -d "$pg_database" -c '\q'; do
	>&2 echo "Postgres is unavailable - sleeping"
	sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd

