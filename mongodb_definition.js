// Users Collection
{
  _id: ObjectId,
  name: String,
  email: String, 
  password: String,
  phone: String,
  role: String, 
  createdAt: Date,
  updatedAt: Date
}

// Spaces Collection
{
  _id: ObjectId,
  name: String,
  type: String,
  capacity: Number,
  description: String,
  manager_id: ObjectId, 
  resources: [ 
    {
      resource_id: ObjectId,  
      quantity: Number
    }
  ]
}

// Resources Collection
{
  _id: ObjectId,
  name: String,
  description: String,
  available_quantity: Number
}

// Reservations Collection
{
  _id: ObjectId,
  space_id: ObjectId, 
  user_id: ObjectId, 
  start_time: Date,
  end_time: Date,
  status: String, 
  created_at: Date,
  history: [ 
    {
      action: String,
      action_date: Date,
      action_user: ObjectId, 
      details: String
    }
  ]
}
