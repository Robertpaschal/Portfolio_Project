from redis import Redis

# Initialize the Redis client
redis_client = Redis(host='localhost', port=6379, db=0, decode_responses=True)

def get_redis_client():
    """Defines a Redis instance"""
    return redis_client
