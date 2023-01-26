namev = a

vue-c:
	cd ./components && \
	md $(namev) && \
	cd $(namev) && \
	echo > style.scss && \
	echo > media.scss
	copy templateVue.txt "./components/$(namev)/$(namev).vue "
	
