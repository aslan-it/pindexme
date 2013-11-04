class PinsController < ApplicationController
	def index

		@pin = Pin.all

		respond_to do |format|
format.html # index.html.erb
format.json { render json: @pins }
end
end

def show
	@pin = Pin.find(params[:id])

	respond_to do |format|
format.html # show.html.erb
format.json { render json: @chancellor }
end
end

def new
	@pin = Pin.new
	@pin.pincsses.build
	eltext=@pin.eltexts.build
	eltext.pincsses.build

	respond_to do |format|
format.html # new.html.erb
format.json { render json: @pin }
end
end

def create
	@pin = Pin.new(pin_params)
	if @pin.save
		redirect_to @pin
		#format.json { render json: @pin, status: :created, location: @pin }
	else
		render action: "new"
		#format.json { render json: @pin.errors, status: :unprocessable_entity }
	end
end

private 

def pin_params
	params.require(:pin).permit(:title, eltexts_attributes: [ :text, pincsses_attributes:[ :property, :value] ], pincsses_attributes:[ :property, :value])
end

end
