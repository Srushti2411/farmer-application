import farmerRoutes from './routes/farmer.js';
import productRoutes from './routes/product.js';
import orderRoutes from './routes/order.js';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
import farmerRoutes from './routes/farmer.js';
import productRoutes from './routes/product.js';
import orderRoutes from './routes/order.js';

// Use routes
app.use('/api/farmers', farmerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
