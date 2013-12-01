class PinsController < ApplicationController
#	load_and_authorize_resource
before_filter :authenticate_user!
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
def edit
  @pin = Pin.find(params[:id])
end

def new
	@pin = Pin.new
	authorize! :new, @pin, :message => 'Not authorized as an administrator.'
	#@pin.pincsses.build
	#@eltext=@pin.eltexts.build
	#eltext.pincsses.build
	#@eltext.build_formcss

	respond_to do |format|
format.html # new.html.erb
format.json { render json: @pin }
end
end

def create
	@pin = current_user.pins.new(pin_params)
	if @pin.save
		redirect_to @pin
		#format.json { render json: @pin, status: :created, location: @pin }
	else
		render action: "new"
		#format.json { render json: @pin.errors, status: :unprocessable_entity }
	end
end

def update
  @pin = Pin.find(params[:id])
 
  if @pin.update(pin_params)
    redirect_to @pin
  else
    render 'edit'
  end
end

  def destroy
    @pin = Pin.find(pin_params)
    @pin.destroy
    redirect_to pins_url, notice: "Successfully destroyed pin."
  end


private 


def pin_params
	params.require(:pin).permit(:id, :title, :width,:height,:status, pinimages_attributes: [:id, :title, :image, :_destroy ] ,eltexts_attributes: [ :id, :text, :_destroy, formcss_attributes:[ :top, :left,:width,:height], pincsses_attributes:[:id, :property, :value, :_destroy] ], pincsses_attributes:[ :id,:property, :value, :_destroy], eltareas_attributes:[ :id,:textarea,:_destroy])
end

end
