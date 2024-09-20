load-testing:
	docker run --rm -i grafana/k6 run --vus 10 --duration 30s - <load.js