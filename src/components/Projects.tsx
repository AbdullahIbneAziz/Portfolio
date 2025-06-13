import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../App';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const { isDark } = useTheme();

  const projects: Project[] = [
    {
      id: '1',
      title: 'Autonomous Vehicle Computer Vision',
      description: 'Deep learning system for real-time object detection and lane recognition in autonomous vehicles using YOLO and semantic segmentation.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['PyTorch', 'OpenCV', 'CUDA', 'ROS', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      content: {
        overview: 'Developed a comprehensive computer vision system for autonomous vehicles that processes real-time camera feeds to detect objects, pedestrians, and lane markings with 95% accuracy.',
        challenges: [
          'Real-time processing requirements with latency under 50ms',
          'Handling diverse weather and lighting conditions',
          'Integrating multiple sensor data streams',
          'Ensuring safety-critical reliability standards'
        ],
        solutions: [
          'Implemented optimized YOLO architecture with custom loss functions',
          'Used data augmentation and synthetic data generation',
          'Deployed model quantization and TensorRT optimization',
          'Built comprehensive testing framework with edge cases'
        ],
        results: 'Achieved 95% object detection accuracy, 40ms average inference time, and successful deployment in 12 test vehicles across 50,000+ miles of testing.',
        technicalDetails: 'The system uses a multi-stage pipeline with YOLOv5 for object detection, DeepLabV3+ for semantic segmentation, and a custom tracking algorithm. Model optimization includes INT8 quantization and TensorRT acceleration for real-time performance on NVIDIA Xavier AGX.'
      }
    },
    {
      id: '2',
      title: 'NLP-Powered Customer Insights Platform',
      description: 'Enterprise-scale sentiment analysis and topic modeling system processing millions of customer reviews and feedback using transformer models.',
      image: 'https://images.pexels.com/photos/5240545/pexels-photo-5240545.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['BERT', 'Transformers', 'Apache Kafka', 'Elasticsearch', 'FastAPI'],
      github: 'https://github.com',
      content: {
        overview: 'Built an enterprise NLP platform that analyzes customer feedback from multiple channels, providing real-time insights and sentiment trends to drive business decisions.',
        challenges: [
          'Processing millions of text documents daily',
          'Multi-language support across 15 languages',
          'Real-time streaming data requirements',
          'Scalable deployment across cloud infrastructure'
        ],
        solutions: [
          'Implemented distributed processing with Apache Kafka',
          'Used multilingual BERT models with fine-tuning',
          'Built microservices architecture with FastAPI',
          'Deployed on Kubernetes with auto-scaling'
        ],
        results: 'Processes 2M+ documents daily with 92% sentiment accuracy, reduced manual analysis time by 80%, and provides insights to 500+ business users.',
        technicalDetails: 'Architecture includes Kafka for data streaming, fine-tuned BERT models for sentiment analysis, LDA for topic modeling, and Elasticsearch for real-time search and analytics. The system handles 10,000+ requests per second with 99.9% uptime.'
      }
    },
    {
      id: '3',
      title: 'Predictive Maintenance AI System',
      description: 'Machine learning platform for industrial equipment that predicts failures 30 days in advance using IoT sensor data and time series analysis.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['TensorFlow', 'Time Series', 'IoT', 'MLflow', 'Grafana'],
      github: 'https://github.com',
      content: {
        overview: 'Developed a predictive maintenance system that analyzes IoT sensor data from industrial equipment to predict failures and optimize maintenance schedules.',
        challenges: [
          'Handling multivariate time series data from 10,000+ sensors',
          'Dealing with imbalanced failure data',
          'Real-time anomaly detection requirements',
          'Integration with existing industrial systems'
        ],
        solutions: [
          'Implemented LSTM networks for time series forecasting',
          'Used SMOTE and synthetic data generation for class balancing',
          'Built real-time monitoring with Apache Spark Streaming',
          'Created RESTful APIs for system integration'
        ],
        results: 'Reduced unplanned downtime by 45%, increased equipment lifespan by 20%, and saved $2M annually in maintenance costs across 50+ industrial sites.',
        technicalDetails: 'The system uses LSTM-based encoder-decoder networks for multivariate time series forecasting, isolation forests for anomaly detection, and MLflow for model lifecycle management. Data pipeline processes 1TB+ daily from 10,000+ IoT sensors.'
      }
    },
    {
      id: '4',
      title: 'Medical Image Analysis Platform',
      description: 'CNN-based diagnostic system for medical imaging that assists radiologists in detecting early-stage diseases with 97% accuracy.',
      image: 'https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['TensorFlow', 'CNN', 'DICOM', 'React', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      content: {
        overview: 'Created an AI-powered medical imaging platform that assists radiologists in detecting and diagnosing diseases from X-rays, CT scans, and MRIs with high accuracy.',
        challenges: [
          'Working with sensitive medical data and HIPAA compliance',
          'Handling large DICOM image files efficiently',
          'Achieving high accuracy for life-critical decisions',
          'Integration with hospital information systems'
        ],
        solutions: [
          'Implemented data encryption and secure access controls',
          'Used progressive loading and image compression techniques',
          'Developed ensemble methods with multiple CNN architectures',
          'Built FHIR-compliant APIs for system integration'
        ],
        results: 'Achieved 97% diagnostic accuracy, reduced diagnosis time by 60%, and successfully deployed in 25+ hospitals helping 100+ radiologists daily.',
        technicalDetails: 'Uses ResNet-50 and DenseNet-121 ensemble architecture with attention mechanisms. The system processes DICOM images with custom preprocessing pipelines and provides explainable AI visualizations using Grad-CAM for clinical decision support.'
      }
    },
    {
      id: '5',
      title: 'Real-time Fraud Detection Engine',
      description: 'High-throughput ML system for detecting fraudulent transactions in real-time using graph neural networks and anomaly detection.',
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['GraphQL', 'PyTorch Geometric', 'Redis', 'Apache Flink', 'MongoDB'],
      github: 'https://github.com',
      content: {
        overview: 'Built a real-time fraud detection system that analyzes transaction patterns and user behavior to identify fraudulent activities with minimal false positives.',
        challenges: [
          'Processing millions of transactions per minute',
          'Minimizing false positives while catching fraud',
          'Handling evolving fraud patterns and adversarial attacks',
          'Maintaining sub-100ms response times'
        ],
        solutions: [
          'Implemented graph neural networks for relationship analysis',
          'Used online learning for model adaptation',
          'Built feature stores with Redis for real-time lookups',
          'Deployed stream processing with Apache Flink'
        ],
        results: 'Detected 99.2% of fraudulent transactions with only 0.1% false positive rate, prevented $50M+ in fraud losses, and processes 10M+ transactions daily.',
        technicalDetails: 'Architecture combines Graph Convolutional Networks with traditional ML features, using Apache Flink for stream processing and Redis for sub-millisecond feature lookups. The system includes adaptive thresholding and continuous learning capabilities.'
      }
    },
    {
      id: '6',
      title: 'Conversational AI Chatbot Platform',
      description: 'Advanced conversational AI system with natural language understanding, context awareness, and multi-turn dialogue capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['GPT-3', 'Rasa', 'spaCy', 'WebSocket', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      content: {
        overview: 'Developed an enterprise-grade conversational AI platform that handles complex customer inquiries with human-like understanding and contextual responses.',
        challenges: [
          'Understanding context across multi-turn conversations',
          'Handling domain-specific terminology and edge cases',
          'Scaling to support thousands of concurrent users',
          'Integrating with existing customer service workflows'
        ],
        solutions: [
          'Implemented transformer-based dialogue management',
          'Built custom NER models for domain entities',
          'Used WebSocket connections for real-time responses',
          'Created comprehensive testing framework with conversation flows'
        ],
        results: 'Achieved 89% intent recognition accuracy, handles 50,000+ conversations daily, reduced customer service costs by 35%, and maintains 4.6/5 user satisfaction score.',
        technicalDetails: 'The platform uses fine-tuned BERT for intent classification, GPT-3 for response generation, and custom dialogue state tracking. Features include sentiment analysis, escalation detection, and integration with CRM systems via REST APIs.'
      }
    }
  ];

  return (
    <section className={`py-20 px-4 relative ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900' 
        : 'bg-gradient-to-b from-white via-gray-50 to-gray-100'
    }`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Showcase of production-ready ML solutions that have made real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 transform hover:scale-105 group cursor-pointer ${
                isDark 
                  ? 'bg-black/50 backdrop-blur-sm border-gray-800/50 hover:border-blue-500/30' 
                  : 'bg-white/80 backdrop-blur-sm border-gray-200/50 hover:border-blue-400/50 hover:shadow-xl'
              }`}
              onClick={() => onProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.github && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  )}
                  {project.demo && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, '_blank');
                      }}
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  isDark 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 line-clamp-3 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        isDark 
                          ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' 
                          : 'bg-blue-100/80 text-blue-700 border-blue-300/50'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      isDark 
                        ? 'bg-gray-500/20 text-gray-400' 
                        : 'bg-gray-200/80 text-gray-600'
                    }`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className={`flex items-center font-medium transition-colors ${
                  isDark 
                    ? 'text-blue-400 group-hover:text-blue-300' 
                    : 'text-blue-600 group-hover:text-blue-500'
                }`}>
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;