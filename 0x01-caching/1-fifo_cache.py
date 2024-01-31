#!/usr/bin/env python3

"""FIFO cache module"""


from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """FIFO caching class"""
    def __init__(self):
        """initialises fifo cache instance"""
        super().__init__()

    def put(self, key, item):
        """Assigns item value to key in cache_data dictionary"""
        if key is not None and item is not None:
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                first = self.cache_data.popitem(last=False)
                print(f"DISCARD: {first}")
            self.cache_data[key] = item

    def get(self, key):
        """Returns value in dict linked to key"""
        return self.cache_data.get(key, None)
