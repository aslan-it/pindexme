module ApplicationHelper
	def link_to_add_fields(name, f, association, id)
		new_object = f.object.send(association).klass.new
		nid = new_object.object_id
		fields = f.fields_for(association, new_object, child_index: nid) do |builder|
			render(association.to_s.singularize + "_fields", f: builder)
		end
		link_to(name, '#', id:id ,class: "add_fields shidden", data: {id: nid, fields: fields.gsub("\n", "")})
	end
end
