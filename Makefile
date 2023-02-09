build-image:
	docker image build . -t <your_dockerhub_name>/<container_name>:tag
run-image:
	docker run -p 4000:4000 <image_name/image_id>
up-dev:
	docker-compose up --build
down:
	down-compose down